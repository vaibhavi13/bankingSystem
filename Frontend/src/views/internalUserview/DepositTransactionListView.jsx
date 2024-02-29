import {FcCurrencyExchange} from "react-icons/fc";
import {Logo} from "../../components/shared/Logo";
import React, {useState, useEffect} from "react";
import axios from "axios";
import { RiLoginCircleFill } from "react-icons/ri";
import { Link, useNavigate } from "react-router-dom";
import Cookies from "js-cookie"; 

export default function DepositTransactionListview() {
  const [depositTransactionsList, setDepositTransactionsData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    const getDepositTransactions = async () => {
      try {
        const role = Cookies.get('role');
        if (!role) {
          console.error("Role not found in cookie");
          navigate("/login");
          return;
        }

                const token = Cookies.get('token');

        if (token) {
          const response = await axios.get('http://localhost:8080/'+role+'/deposit', {
            headers: {
              Authorization: `Bearer ${token}`,
            },
          });
          setDepositTransactionsData(response.data);
          console.log("Transaction data:", response.data);
        } else {
          console.error("Token not found in cookie");
          navigate("/login");
        }
      } catch (error) {
        console.error("Error fetching transaction data:", error);
        setError(error.message || "An error occurred");
      } finally {
        setLoading(false); // Set loading to false regardless of success or failure
      }
    };
    getDepositTransactions();
  }, []);

  const handleAction = async (clientId, accept) => {
    try {
      setLoading(true);
      setError(null);
  
      const role = Cookies.get('role');
      const token = Cookies.get('token');
  
      if (!role || !token) {
        console.error("Role or token not found in cookie");
        navigate("/login");
        return;
      }
  
      const response = await axios.post(
        'http://localhost:8080/'+role+'/deposit/'+ clientId,
        { accept },
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );
  
      // Handle success - Refresh the list view
      window.location.reload(); // Reload the page on OK
    } catch (error) {
      window.alert(error.message, () => {
      window.location.reload(); // Reload the page on OK
      });
    } finally {
      setLoading(false); // Set loading to false regardless of success or failure
    }
  };

  return (
    <div>
      {/* Loading state */}
      {loading && <p>Loading...</p>}

      {/* Original page */}
      {!loading && !error && (
        <div className="w-full lg:w-[40%] max-w-md block p-6 rounded shadow-lg shadow-black/20 bg-slate-50 mx-auto">
          <Logo />
          <h3 className="flex justify-center items-center text-2xl text-blue-800 font-bold text-center p-2 my-4 rounded shadow bg-blue-200 border-x-4 border-blue-800 select-none">
            <FcCurrencyExchange className="mr-1" size={45} />
            <span>Deposit Transactions to Review</span>
          </h3>

          {depositTransactionsList && Array.isArray(depositTransactionsList) && depositTransactionsList.map((depositTransaction) => (
            <div key={depositTransaction.client_id}>
              <p>
                User name: {depositTransaction.user_name}
              </p>
              <p>
                User account no: {depositTransaction.client_id}
              </p>
              <p>
                Amount: {depositTransaction.amount}
              </p>
              <button onClick={() => handleAction(depositTransaction._id, true)} disabled={loading}>
                Approve
              </button> 
              <button onClick={() => handleAction(depositTransaction._id, false)} disabled={loading}>
                Reject
              </button>
              <p><br></br></p>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
