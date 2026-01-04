import React from "react";
import { Link } from "react-router-dom";
import { instructorWelcomeStyles } from "../../assets/dummyStyles";

const InstructorWelcome = ({ status, instructorName }) => {
  return (
    <section className={instructorWelcomeStyles.container}>
      <div className={instructorWelcomeStyles.card}>
        {/* Welcome Title */}
        <h1
          className="group relative inline-block text-3xl sm:text-4xl lg:text-5xl font-extrabold mb-3
               bg-clip-text text-transparent 
               bg-gradient-to-r from-blue-900 via-blue-700 to-cyan-500 
               animate-gradient-x"
        >
          Welcome, {instructorName}
          
          <span className="relative inline-block mt-2 text-lg sm:text-xl font-medium text-slate-600">
    to EduVerse Instructor Portal</span>
        </h1>

        <p className={instructorWelcomeStyles.subtitle}>
          Thank you for being a part of EduVerse.
        </p>

        {/* STATUS CONTENT */}
        {status === "approved" && (
          <div className={instructorWelcomeStyles.approvedBox}>
            <h2 className={instructorWelcomeStyles.approvedTitle}>
              Your instructor account is approved 🎉
            </h2>

            <p className={instructorWelcomeStyles.approvedText}>
              You now have full access to create courses, upload content, and
              engage with learners on the platform.
            </p>

            <div className={instructorWelcomeStyles.actions}>
              <Link
                to="/addcourse"
                className={instructorWelcomeStyles.primaryButton}
              >
                Create your first course
              </Link>

              <Link
                to="/listcourse"
                className={instructorWelcomeStyles.secondaryButton}
              >
                Manage courses
              </Link>
            </div>
          </div>
        )}

        {status === "pending" && (
          <div className={instructorWelcomeStyles.pendingBox}>
            <p className={instructorWelcomeStyles.pendingText}>
              ⏳ Your instructor account is currently under review. You’ll get
              full access once the admin approves your profile.
            </p>
          </div>
        )}

        {status === "rejected" && (
          <div className={instructorWelcomeStyles.rejectedBox}>
            <p className={instructorWelcomeStyles.rejectedText}>
              ❌ Your instructor request was not approved. Please review the
              requirements or contact support.
            </p>
          </div>
        )}
      </div>
    </section>
  );
};

export default InstructorWelcome;
