import { useForm } from "react-hook-form";
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from "yup";

const schema = yup.object({
    userName: yup.string().required(),
    amount: yup.number().positive().integer().required(),
  }).required();

const UserInput = () => {

  const { register, handleSubmit, watch, formState: { errors } } = useForm({
    resolver: yupResolver(schema)
  });
  const onFormSubmit = data => console.log(data);

  console.log(watch("example")); 

  return (

    <form onSubmit={handleSubmit(onFormSubmit)}>
      {/* register your input into the hook by invoking the "register" function */}
      <input {...register("userName")} />
      <p>{errors.userName?.message}</p>
      {/* <input defaultValue="test" {...register("User Name",  { required: true })} /> */}
      <select {...register("currency")}>
        <option value="USD">USD</option>
        <option value="GBP">GBP</option>
        <option value="JPY">JPY</option>
      </select>
      <p>{errors.currency?.message}</p>
      <input type="number" {...register("amount", { min:1 })} />
      <p>{errors.amount?.message}</p>

      
      {/* errors will return when field validation fails  */}
      {errors.exampleRequired && <span>This field is required</span>}
      
      <input type="submit" />
    </form>
  );
}

 
export default UserInput;