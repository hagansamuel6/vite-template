import "./Nav.css";
import DashboardIcon from "@mui/icons-material/Dashboard";
import GroupsIcon from "@mui/icons-material/Groups";
import AssignmentTurnedInIcon from "@mui/icons-material/AssignmentTurnedIn";
import AccountBalanceWalletIcon from "@mui/icons-material/AccountBalanceWallet";
import AssessmentIcon from "@mui/icons-material/Assessment";
import PaymentIcon from "@mui/icons-material/Payment";
import AttachMoneyIcon from "@mui/icons-material/AttachMoney";
import PersonIcon from "@mui/icons-material/Person";
import { Avatar } from "@mui/material";
import { deepOrange } from "@mui/material/colors";

const Nav = () => {
  return (
    <div
      className="bg-blue-900"
      style={{
        display: "flex",
        flexDirection: "column",
        color: "white",
      }}
    >
      <nav
        className="w-80 text-white hidden lg:block"
        style={{
          boxShadow:
            "rgba(0, 0, 0, 0.16) 0px 3px 6px, rgba(0, 0, 0, 0.23) 0px 3px 6px",
        }}
      >
        <div className="h-16 w-full bg-blue-900 nav">
          <div>
            <Avatar
              sx={{ bgcolor: deepOrange[500] }}
              alt="Andrews"
              src="/broken-image.jpg"
            >
              A
            </Avatar>
          </div>
          <div className="name">Andrews</div>
        </div>
      </nav>
      <h2 className="h2">TLG TRANSPORT</h2>
      <div
        style={{
          overflowY: "auto",
          flex: "1",
        }}
      >
        <div className="items">
          <ul>
            <li className="list-item">
              <div className="icon">
                <DashboardIcon />
              </div>
              <div>
                <a href="/">Dashboard</a>
              </div>
            </li>
            <li className="list-item">
              <div className="icon">
                <GroupsIcon />
              </div>
              <div>
                <a href="/">Staff</a>
              </div>
            </li>
            <li className="list-item">
              <div className="icon">
                <AssignmentTurnedInIcon />
              </div>
              <div>
                <a href="/">Task</a>
              </div>
            </li>
            <li className="list-item">
              <div className="icon">
                <AccountBalanceWalletIcon />
              </div>
              <div>
                <a href="/">Accounts</a>
              </div>
            </li>
            <li className="list-item">
              <div className="icon">
                <AssessmentIcon />
              </div>
              <div>
                <a href="/">Reports</a>
              </div>
            </li>
            <li className="list-item">
              <div className="icon">
                <AttachMoneyIcon />
              </div>
              <div>
                <a href="/">Salary</a>
              </div>
            </li>
            <li className="list-item">
              <div className="icon">
                <PaymentIcon />
              </div>
              <div>
                <a href="/">Payments</a>
              </div>
            </li>
            <li className="list-item">
              <div className="icon">
                <PersonIcon />
              </div>
              <div>
                <a href="/">Users</a>
              </div>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Nav;
