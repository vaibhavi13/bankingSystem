import React from 'react';

const UserListView = ({ user_name, email, balance, account_id }) => {
    const onClick = async()=>{

    }
  return (
    <>
    <div>
    <ul class="max-w divide-y divide-gray-200 dark:divide-gray-800">
   <li class="block w-full cursor-pointer rounded-lg p-4 text-left transition duration-500 hover:bg-white-100 hover:text-white-500 focus:bg-white-100 focus:text-white-500 focus:ring-0 dark:hover:bg-teal-900 dark:hover:text-white-200 dark:focus:bg-green-600 dark:focus:text-white-200">
      <div class="flex items-center space-x-4 rtl:space-x-reverse text-slate-900 group-hover:text-white text-sm">
         <div class="flex-shrink-0 w-8 h-8 rounded-full">
            {/* <img class="w-8 h-8 rounded-full" src="" alt="Neil image"> */}
         </div>
         <div class="flex-1 min-w-0">
            <p class="text-sm text-gray-100 truncate dark:text-gray-100">
                <strong>{user_name}</strong>
            </p>
            <p class="text-sm text-gray-100 truncate dark:text-gray-100">
              <strong>Email:</strong> {email}
            </p>
            <p class="text-sm text-gray-100 truncate dark:text-gray-100">
              <strong>Account ID:</strong> {account_id}
            </p>
         </div>
         <div class="text-white bg-blue-700 rounded-lg text-sm px-6 py-2.5 me-2 mb-2 dark:bg-blue-600 focus:outline-none dark:focus:ring-blue-800">
            <strong>Balance:</strong> ${balance}
         </div>
      </div>
   </li>
</ul>
    </div>
    {/* <div className="text-sm text-gray-500 truncate dark:text-gray-400" onClick={onClick}>
      <h2>{user_name}</h2>
      <p><strong>Email:</strong> {email}</p>
      <p><strong>Balance:</strong> ${balance}</p>
      <p><strong>Account ID:</strong> {account_id}</p>
    </div> */}
    </>
  );
};

export default UserListView;