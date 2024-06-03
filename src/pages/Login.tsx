import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

type User = {
    email: string,
    password: string,
    select: string,
}

export default function Login() {
    const navigate = useNavigate();

    const user: User = {
        email: 'ngoc@gmail.com',
        password: '123456',
        select: 'Admin',
    }

    const [formValue, setForm] = useState<User>({
        email: '',
        password: '',
        select: '',
    });

    const [error, setError] = useState<string>('');

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
        const { name, value } = e.target;
        setForm({ ...formValue, [name]: value });
    }

    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        if (formValue.email === user.email && formValue.password === user.password && formValue.select === user.select) {
            navigate('/account');
        } else {
            setError('Thông tin đăng nhập không đúng');
        }
    }

    return (
        <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', minHeight: '600px' }}>
            <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
                <p className='text-lg'>Đăng nhập</p>
                <input onChange={handleChange} name='email' type="email" placeholder='email' required />
                <input onChange={handleChange} name='password' type="password" placeholder='password' required />
                <select name="select" onChange={handleChange} required>
                    <option value="" disabled selected>Chọn quyền</option>
                    <option value="Admin">Admin</option>
                    <option value="User">User</option>
                </select>
                <button type="submit">Đăng nhập</button>
                {error && <p style={{ color: 'red' }}>{error}</p>}
            </form>
        </div>
    );
}
