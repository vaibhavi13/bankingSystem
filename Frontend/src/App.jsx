import {
    BrowserRouter as Router,
    Routes,
    Route,
    Navigate,
} from "react-router-dom";
import {UserLoginPage} from "./views/UserLoginPage";
import {RegisterPage} from "./views/RegisterPage";
import {Index} from "./components/home/Index";
import NotFoundPage from "./views/NotFound";
import InternalUserDashboard from "./components/dashboards/InternalUserDashboard";
import ExternalUserDashboard from "./components/dashboards/ExternalUserDashboard";
import DepositTransactionListview from "./views/internalUserview/DepositTransactionListView";
import WithdrawTransactionListview from "./views/internalUserview/WithdrawTransactionListView";
import UserListView from "./views/internalUserview/UserListView";
import MyProfilePage from "./views/userView/MyProfilePage";
import DepositPage from "./views/userView/DepositPage";
import WithdrawalPage from "./views/userView/WithdrawalPage";
import DepositHistory from "./views/userView/DepositHistory";
import WithdrawalHistory from "./views/userView/WithdrawHistory";
import LogoutPage from "./views/userView/LogoutPage";
import UserNavigationPage from "./views/internalUserview/UserNavigationPage";
import UserDepositHistory from "./views/internalUserview/UserDepositHistory";
import UserProfile from "./views/internalUserview/UserProfile";
import UserWithdrawHistory from "./views/internalUserview/UserWithdrawHistory";


function App() {

    //User And Admin Paths
    const paths = [
        "/profile",
        "/profile/:id",
        "/profile/:id/update",
        "/notifications",
        "/notifications/:id",
        "/account-request",
        "/account/in/:id",
        "/account/out/:id",
        "/account/withdraw/:id",
        "/account/transfer/:id",
        "/account/deposit/:id",
        "/account/deposit-logs/:id",
        "/account/withdraw-logs/:id",
        "/contact",
        "/admins/profile/:id",
        "/admins/profile/:id/update",
    ];

    return (
        <Router>
            {/* Guest Routes */}
            {/* {!user && !admin && ( */}
            <Routes>
                <Route index element={<Index/>}/>
                <Route exact path="/register" element={<RegisterPage/>}/>
                <Route exact path="/login" element={<UserLoginPage/>}/>
                <Route exact path="/externalUserDashboard" element={<ExternalUserDashboard/>}/>
                /externalUserDashboard
                <Route exact path="/internalUserDashboard" element={<InternalUserDashboard/>}/>
                <Route exact path="/userListView" element={
                    <InternalUserDashboard>
                        <UserListView/>
                    </InternalUserDashboard>}/>
                <Route exact path="/depositTransactionListView" element={
                    <InternalUserDashboard>
                        <DepositTransactionListview/>
                    </InternalUserDashboard>}/>
                <Route exact path="/withdrawTransactionListView" element={
                    <InternalUserDashboard>
                        <WithdrawTransactionListview/>
                    </InternalUserDashboard>}/>

                <Route path="/userNavigationPage/:userId" element={ 
                    <InternalUserDashboard>
                        <UserNavigationPage />
                    </InternalUserDashboard>} />

                <Route path="/userNavigationPage/:userId/profile" element={ 
                    <InternalUserDashboard>
                        <UserProfile />
                    </InternalUserDashboard>} />

                <Route path="/userNavigationPage/:userId/deposit" element={ 
                    <InternalUserDashboard>
                        <UserDepositHistory />
                    </InternalUserDashboard>} />

                <Route path="/userNavigationPage/:userId/withdraw" element={ 
                    <InternalUserDashboard>
                        <UserWithdrawHistory />
                    </InternalUserDashboard>} />    
        
                <Route exact path="/profile" element={
                    <ExternalUserDashboard>
                        <MyProfilePage></MyProfilePage>
                    </ExternalUserDashboard>
                }/>


                <Route exact path="/deposit" element={
                    <ExternalUserDashboard>
                        <DepositPage></DepositPage>
                    </ExternalUserDashboard>
                }/>

                <Route exact path="/withdraw" element={
                    <ExternalUserDashboard>
                        <WithdrawalPage></WithdrawalPage>
                    </ExternalUserDashboard>
                }/>

                <Route exact path="/deposithistory" element={
                    <ExternalUserDashboard>
                        <DepositHistory></DepositHistory>
                    </ExternalUserDashboard>
                }/>

            <Route exact path="/withdrawhistory" element={
                                <ExternalUserDashboard>
                                    <WithdrawalHistory></WithdrawalHistory>
                                </ExternalUserDashboard>
                            }/>

<Route exact path="/logout" element={
                                <ExternalUserDashboard>
                                    <LogoutPage></LogoutPage>
                                </ExternalUserDashboard>
                            }/>
                {paths.map((stringPath) => (
                    <Route
                        key={"Home"}
                        exact
                        path={stringPath}
                        element={<Navigate to={"/"}/>}
                    />
                ))}
                <Route path="*" element={<NotFoundPage/>}/>
            </Routes>
            {/* // )} */}
        </Router>
    );
}

export default App;
