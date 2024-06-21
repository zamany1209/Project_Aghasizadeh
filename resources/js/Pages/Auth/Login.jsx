import { useEffect } from 'react';
import Checkbox from '@/Components/Checkbox';
import GuestLayout from '@/Layouts/GuestLayout';
import InputError from '@/Components/InputError';
import InputLabel from '@/Components/InputLabel';
import PrimaryButton from '@/Components/PrimaryButton';
import TextInput from '@/Components/TextInput';
import { Head, Link, useForm } from '@inertiajs/react';

export default function Login({ status, canResetPassword }) {
    const { data, setData, post, processing, errors, reset } = useForm({
        email: '',
        password: '',
        remember: false,
    });

    useEffect(() => {
        document.body.classList.add('bg-gradient-primary');
        return () => {
            reset('password');
        };
    }, []);

    const submit = (e) => {
        e.preventDefault();

        post(route('login'));
    };

    return (
        <>
        <Head title="Log in" />
            <div class="container mt-4">


                <div class="row justify-content-center">

                    <div class="col-xl-10 col-lg-12 col-md-9">

                        <div class="card o-hidden border-0 shadow-lg my-5">
                            <div class="card-body p-0">

                                <div class="row">
                                    <div class="col-lg-6 d-none d-lg-block bg-login-image">
                                    </div>
                                    <div class="col-lg-6">
                                        <div class="p-5">
                                            <div class="text-center">
                                                <h1 class="h4 text-gray-900 mb-4">خوش آمدید</h1>
                                            </div>
                                            <form class="user" onSubmit={submit}>
                                                <div class="form-group">
                                                    <input type="email" class="form-control form-control-user"
                                                        id="email"
                                                        name="email"
                                                        value={data.email}
                                                        autoComplete="username"
                                                        isFocused={true}
                                                        onChange={(e) => setData('email', e.target.value)}
                                                        placeholder="Enter Email Address..."/>
                                                        <InputError message={errors.email} className="mt-2" />
                                                </div>
                                                <div class="form-group">
                                                    <input type="password" class="form-control form-control-user"
                                                        id="password"
                                                        name="password"
                                                        value={data.password}
                                                        autoComplete="current-password"
                                                        onChange={(e) => setData('password', e.target.value)}
                                                        placeholder="Password"/>
                                                        <InputError message={errors.password} className="mt-2" />
                                                </div>
                                                <div class="form-group">
                                                    <div class="custom-control custom-checkbox small">
                                                        <input type="checkbox" class="custom-control-input" id="customCheck"
                                                            name="remember"
                                                            checked={data.remember}
                                                            onChange={(e) => setData('remember', e.target.checked)}/>
                                                        <label class="custom-control-label" htmlFor="customCheck">Remember
                                                            Me</label>
                                                    </div>
                                                </div>
                                                <button disabled={processing} class="btn btn-primary btn-user btn-block">
                                                    Login
                                                </button>
                                            </form>
                                            <hr/>
                                            <div class="text-center">
                                                <a class="small" href="#">Forgot Password?</a>
                                            </div>
                                            <div class="text-center">
                                                <a class="small" href="#">Create an Account!</a>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                    </div>

                </div>

            </div>
        </>
    );
}