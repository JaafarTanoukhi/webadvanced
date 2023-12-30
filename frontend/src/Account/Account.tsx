import React, { useState } from 'react';
import { FormButton, FormInput } from '../Auth/shared';
import { Form, Formik } from 'formik';
import { Link } from 'react-router-dom';

export default function Account() {
  // Initial account information
  const initialAccount = {
    firstName: 'John',
    lastName: 'Doe',
    email: 'john.doe@example.com',
    username: 'johndoe',
    password: 'securepassword',
  };

  // State to manage account information
  const [account, setAccount] = useState(initialAccount);

  // State to manage form inputs
  const [newPassword, setNewPassword] = useState('');
  const [newUsername, setNewUsername] = useState('');

  // Function to handle password change
  function ChangePassword(){
    
  }

  // Function to handle username change
  function ChangeUsername(){

  }

  return (
    <div className="container mx-auto mt-8 font-Rob">
      <div className="max-w-md mx-auto bg-white p-8 border rounded-md shadow-md">
        <h2 className="text-2xl text-violet-800 font-semibold mb-4">Account Information</h2>
        <div className="bg-slate-50 p-2 mb-4 text-violet-900">
          <strong className='text-violet-500'>First Name:</strong> {account.firstName}
        </div>
        <div className="mb-4 bg-slate-50 p-2 text-violet-900">
          <strong className='text-violet-500'>Last Name:</strong> {account.lastName}
        </div>
        <div className="mb-4 bg-slate-50 p-2 text-violet-900">
          <strong className='text-violet-500'>Email:</strong> {account.email}
        </div>
        <div className="mb-4 bg-slate-50 p-2 text-violet-900">
          <strong className='text-violet-500'>Username:</strong> {account.username}
        </div>
        <div className="mb-8 bg-slate-50 p-2 text-violet-900">
          <strong className='text-violet-500'>Password:</strong> {account.password}
        </div>

        {/* Change Password Form */}
        <div className="mb-4">
          <label className="block text-sm font-medium text-indigo-900">New Password:</label>
          <Formik initialValues={{newpassword:''}} onSubmit={ChangePassword}>
            <Form className='flex flex-col gap-1'>
          <FormInput placeholder='New Password' size='lg' name='newpassword'></FormInput>
          <FormButton>Change Password</FormButton>
            </Form>
          </Formik>
        </div>


        <div className="mb-4">
          <label className="block text-sm font-medium text-indigo-900">New Username:</label>
          <Formik initialValues={{newusername:''}} onSubmit={ChangeUsername}>
            <Form className='flex flex-col gap-1'>
          <FormInput placeholder='New Username' size='lg' name='newusername'></FormInput>
          <FormButton>Change Username</FormButton>
            </Form>
          </Formik>
        </div>
      </div>
    </div>

  );
};
