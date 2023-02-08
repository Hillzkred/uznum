import {useForm} from 'react-hook-form';
import * as yup from 'yup';
import {yupResolver} from "@hookform/resolvers/yup";

const schema = yup.object({
    username: yup.string().required(),
    password: yup.string().required(),
    passwordConfirmation: yup
        .string()
        .required()
        .oneOf([yup.ref('password')], 'Password confirmation does not match')
}).required();

export function RegistrationForm({registrationHandler}: { registrationHandler: (username: string, password: string) => void }) {
    const {register, handleSubmit, formState: {errors}} = useForm<{
        username: string;
        password: string;
        passwordConfirmation: string;
    }>({
        resolver: yupResolver(schema)
    });

    const onSubmit = (data: any) => {
        registrationHandler(data.username, data.password);
    };

    return (
        <form onSubmit={handleSubmit(onSubmit)} className="w-full max-w-sm">
            <div>
                <input {...register("username")} placeholder="Username" className="border my-2 p-2 rounded-lg"/>
                {errors.username && <span>This field is required</span>}
            </div>

            <div>
                <input {...register("password")} placeholder="Password" className="border my-2 p-2 rounded-lg"
                       type="password"/>
                {errors.password && <span>This field is required</span>}
            </div>

            <div>
                <input {...register("passwordConfirmation")} placeholder="Confirm Password"
                       className="border my-2 p-2 rounded-lg" type="password"/>
                {errors.passwordConfirmation && <span>Password confirmation does not match</span>}
            </div>

            <div>
                <button
                    className="shadow bg-purple-500 hover:bg-purple-400 focus:shadow-outline focus:outline-none text-white font-bold py-2 px-4 rounded"
                    type="submit">
                    Submit
                </button>
            </div>
        </form>
    );
}
