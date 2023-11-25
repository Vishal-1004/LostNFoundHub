import React, { useEffect, useState } from "react";
import {
  MDBCol,
  MDBContainer,
  MDBRow,
  MDBCard,
  MDBCardText,
  MDBCardBody,
  MDBCardImage,
  MDBBtn,
} from "mdb-react-ui-kit";
import {
  MDBIcon,
  MDBTabs,
  MDBTabsItem,
  MDBTabsLink,
  MDBTabsContent,
  MDBTabsPane,
} from "mdb-react-ui-kit";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { logoutUser } from "../Store/Slices/UserSlice";
import axios from "axios";

export default function ProfilePage() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [userData, setUserData] = useState({
    name: "",
    email: "",
    regNo: "",
    dayORhostel: "",
  });

  const id = sessionStorage.getItem("id");
  useEffect(() => {
    if (id) {
      const getData = async () => {
        try {
          const res = await axios.get(`http://localhost:5000/profile/${id}`);
          const { name, email, regNo, dayORhostel } = res.data;
          setUserData({
            name: name,
            email: email,
            regNo: regNo,
            dayORhostel: dayORhostel,
          });
        } catch (error) {
          console.error("Error fetching data:", error);
          // Handle the error, e.g., show a user-friendly message or log it
        }
      };
      getData();
    }
  }, []);

  const handleLogout = () => {
    //console.log("Before logout: " + userState.userId);
    sessionStorage.removeItem("id");
    dispatch(logoutUser());
    navigate("/login");
  };

  const [iconsActive, setIconsActive] = useState("tab1");

  const handleIconsClick = (value) => {
    if (value === iconsActive) {
      return;
    }
    setIconsActive(value);
  };

  return (
    <section>
      <MDBContainer className="py-3">
        <MDBRow>
          <MDBCol lg="4">
            <MDBCard className="mb-4">
              <MDBCardBody className="text-center">
                <MDBCardImage
                  src="https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-chat/ava3.webp"
                  alt="avatar"
                  className="rounded-circle"
                  style={{ width: "150px" }}
                  fluid
                />
                <p className="text-muted mb-1">Hello {userData.name}</p>
                <div className="d-flex justify-content-center mb-2">
                  <button
                    type="button"
                    className="btn btn-primary"
                    data-bs-toggle="modal"
                    data-bs-target="#exampleModal"
                  >
                    Edit Profile
                  </button>
                  <MDBBtn outline className="ms-1" onClick={handleLogout}>
                    Logout
                  </MDBBtn>
                </div>
              </MDBCardBody>
            </MDBCard>
          </MDBCol>
          <MDBCol lg="8">
            <MDBCard className="mb-4">
              <MDBCardBody>
                <MDBRow>
                  <MDBCol sm="3">
                    <MDBCardText>Full Name</MDBCardText>
                  </MDBCol>
                  <MDBCol sm="9">
                    <MDBCardText className="text-muted">
                      {userData.name}
                    </MDBCardText>
                  </MDBCol>
                </MDBRow>
                <hr />
                <MDBRow>
                  <MDBCol sm="3">
                    <MDBCardText>Email</MDBCardText>
                  </MDBCol>
                  <MDBCol sm="9">
                    <MDBCardText className="text-muted">
                      {userData.email}
                    </MDBCardText>
                  </MDBCol>
                </MDBRow>
                <hr />
                <MDBRow>
                  <MDBCol sm="3">
                    <MDBCardText>Registration No.</MDBCardText>
                  </MDBCol>
                  <MDBCol sm="9">
                    <MDBCardText className="text-muted">
                      {userData.regNo}
                    </MDBCardText>
                  </MDBCol>
                </MDBRow>
                <hr />
                <MDBRow>
                  <MDBCol sm="3">
                    <MDBCardText>Dayscholar/Hosteler</MDBCardText>
                  </MDBCol>
                  <MDBCol sm="9">
                    <MDBCardText className="text-muted">
                      {userData.dayORhostel}
                    </MDBCardText>
                  </MDBCol>
                </MDBRow>
              </MDBCardBody>
            </MDBCard>
          </MDBCol>
        </MDBRow>
      </MDBContainer>
      <MDBTabs fill className="container">
        <MDBTabsItem>
          <MDBTabsLink
            className="d-flex justify-content-center align-items-center"
            onClick={() => handleIconsClick("tab1")}
            active={iconsActive === "tab1"}
          >
            <MDBIcon className="me-2" />
            Lost Items
          </MDBTabsLink>
        </MDBTabsItem>
        <MDBTabsItem>
          <MDBTabsLink
            className="d-flex justify-content-center align-items-center"
            onClick={() => handleIconsClick("tab2")}
            active={iconsActive === "tab2"}
          >
            <MDBIcon className="me-2" />
            Found Items
          </MDBTabsLink>
        </MDBTabsItem>
      </MDBTabs>

      <MDBTabsContent className="container">
        <MDBTabsPane open={iconsActive === "tab1"}>Lost Items</MDBTabsPane>
        <MDBTabsPane open={iconsActive === "tab2"}>Found Items</MDBTabsPane>
      </MDBTabsContent>
      {/* given below is the structure of a model which opens when user clicks on "Edit Profile" button */}
      <div
        className="modal fade"
        id="exampleModal"
        tabIndex="-1"
        aria-labelledby="exampleModalLabel"
        aria-hidden="true"
      >
        <div className="modal-dialog">
          <div className="modal-content">
            <div className="modal-header">
              <h5 className="modal-title" id="exampleModalLabel">
                Edit Profile
              </h5>
              <button
                type="button"
                className="btn-close"
                data-bs-dismiss="modal"
                aria-label="Close"
              ></button>
            </div>
            <div className="modal-body">
              <div className="mb-3">
                <label htmlFor="formFile" className="form-label">
                  Upload Profile Pic
                </label>
                <input className="form-control" type="file" id="formFile" />
              </div>
              <div className="mb-3">
                <label
                  htmlFor="exampleFormControlInput1"
                  className="form-label"
                >
                  Day Scholoar / Hosteler
                </label>
                <input
                  type="text"
                  className="form-control"
                  id="exampleFormControlInput1"
                  placeholder="Day Scholar / Hosteler"
                />
              </div>
              <div className="mb-3">
                <label
                  htmlFor="exampleFormControlInput2"
                  className="form-label"
                >
                  New Password
                </label>
                <input
                  type="text"
                  className="form-control"
                  id="exampleFormControlInput2"
                  placeholder="Password"
                />
              </div>
              <div className="mb-3">
                <label
                  htmlFor="exampleFormControlInput3"
                  className="form-label"
                >
                  Re-Enter Password
                </label>
                <input
                  type="text"
                  className="form-control"
                  id="exampleFormControlInput3"
                  placeholder="Re-Enter Password"
                />
              </div>
            </div>
            <div className="modal-footer">
              <button type="button" className="btn btn-primary">
                Save changes
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
