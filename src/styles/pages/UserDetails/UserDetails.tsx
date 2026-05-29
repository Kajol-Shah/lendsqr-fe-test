import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import "./UserDetails.scss";
import { getUsers } from "../../../services/userService";

interface User {
  id: number;
  organization: string;
  username: string;
  email: string;
  phone: string;
  dateJoined: string;
  status: string;
}

const UserDetails = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [user, setUser] = useState<User | null>(null);

  useEffect(() => {
    const loadUser = async () => {
      const data = await getUsers();
      const found = (data as User[]).find((u) => u.id === Number(id));
      setUser(found || null);
    };

    loadUser();
  }, [id]);

  if (!user) return <div className="userDetails">Loading...</div>;

  const fullName = user.username;

  return (
    <div className="userDetails">
      <button className="backBtn" onClick={() => navigate("/dashboard/users")}>
        ← Back to Users
      </button>

      <div className="userDetails__top">
        <h2>User Details</h2>

        <div className="userDetails__actions">
          <button className="blacklistBtn">BLACKLIST USER</button>
          <button className="activateBtn">ACTIVATE USER</button>
        </div>
      </div>

      <div className="userCard">
        <div className="userCard__main">
          <div className="avatar">👤</div>

          <div className="userCard__name">
            <h3>{fullName}</h3>
            <p>LSQFf587g90</p>
          </div>

          <div className="divider" />

          <div className="tier">
            <p>User’s Tier</p>
            <span>★ ☆ ☆</span>
          </div>

          <div className="divider" />

          <div className="balance">
            <h3>₦200,000.00</h3>
            <p>9912345678 / Providus Bank</p>
          </div>
        </div>

        <div className="tabs">
          <span className="active">General Details</span>
          <span>Documents</span>
          <span>Bank Details</span>
          <span>Loans</span>
          <span>Savings</span>
          <span>App and System</span>
        </div>
      </div>

      <div className="detailsCard">
        <Section title="Personal Information">
          <Info label="FULL NAME" value={fullName} />
          <Info label="PHONE NUMBER" value={user.phone} />
          <Info label="EMAIL ADDRESS" value={user.email} />
          <Info label="BVN" value="07060988222" />
          <Info label="GENDER" value="Female" />
          <Info label="MARITAL STATUS" value="Single" />
          <Info label="CHILDREN" value="None" />
          <Info label="TYPE OF RESIDENCE" value="Parent’s Apartment" />
        </Section>

        <Section title="Education and Employment">
          <Info label="LEVEL OF EDUCATION" value="B.Sc" />
          <Info label="EMPLOYMENT STATUS" value="Employed" />
          <Info label="SECTOR OF EMPLOYMENT" value="FinTech" />
          <Info label="DURATION OF EMPLOYMENT" value="2 years" />
          <Info label="OFFICE EMAIL" value={user.email} />
          <Info label="MONTHLY INCOME" value="₦200,000.00 - ₦400,000.00" />
          <Info label="LOAN REPAYMENT" value="40,000" />
        </Section>

        <Section title="Socials">
          <Info label="TWITTER" value={`@${user.username}`} />
          <Info label="FACEBOOK" value={user.username} />
          <Info label="INSTAGRAM" value={`@${user.username}`} />
        </Section>

        <Section title="Guarantor">
          <Info label="FULL NAME" value="Debby Oyana" />
          <Info label="PHONE NUMBER" value="07060988222" />
          <Info label="EMAIL ADDRESS" value="debby@gmail.com" />
          <Info label="RELATIONSHIP" value="Sister" />
        </Section>
      </div>
    </div>
  );
};

const Section = ({ title, children }: { title: string; children: React.ReactNode }) => (
  <div className="section">
    <h4>{title}</h4>
    <div className="section__grid">{children}</div>
  </div>
);

const Info = ({ label, value }: { label: string; value: string }) => (
  <div className="info">
    <p>{label}</p>
    <h5>{value}</h5>
  </div>
);

export default UserDetails;