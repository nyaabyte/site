import React from 'react';
import styles from './Members.module.css';
import { sampleMembers, Member } from '../../data/members'; // Import data
// Optional: Import icons if you have a library like react-icons
// import { FaGithub, FaLinkedin, FaTwitter, FaGlobe } from 'react-icons/fa';

// Helper component for social links (optional, but good practice)
const SocialIcon: React.FC<{ type: string; url: string }> = ({ type, url }) => {
  // In a real app, you'd use actual icons here
  let iconChar = '?';
  let label = 'Link';
  switch (type) {
    case 'github':
      iconChar = '💻'; // Placeholder
      label = 'GitHub';
      // icon = <FaGithub />;
      break;
    case 'email':
      iconChar = '✉️'; // Placeholder
      label = 'Email';
      // icon = <FaLinkedin />;
      break;
    case 'website':
      iconChar = '🌐'; // Placeholder
      label = 'Website';
      // icon = <FaGlobe />;
      break;
  }

  return (
    <a
      href={url}
      target="_blank"
      rel="noopener noreferrer"
      className={styles.socialLink}
      aria-label={`${label} profile`} // Accessibility
      title={label} // Tooltip
    >
      {/* Replace iconChar with actual icon component if available */}
      <span className={styles.iconPlaceholder}>{iconChar}</span>
    </a>
  );
};

const Members: React.FC = () => {
  return (
    <section id="members" className={styles.members}>
      <div className={styles.container}>
        <h2>Our Members</h2>
        <p className={styles.intro}>
          Awesome goobers making this cool shit happen :3
        </p>
        <div className={styles.grid}>
          {sampleMembers.map((member: Member) => (
            <div key={member.id} className={styles.card}>
              <img
                src={member.imageUrl}
                alt={`${member.name} profile picture`}
                className={styles.cardImage}
                loading="lazy"
              />
              <div className={styles.cardContent}>
                <h3 className={styles.cardName}>{member.name}</h3>
                <p className={styles.cardRole}>{member.role}</p>
                <p className={styles.cardBio}>{member.bio}</p>
                <div className={styles.socials}>
                  {member.socials.github && (
                    <SocialIcon type="github" url={member.socials.github} />
                  )}
                  {member.socials.email && (
                    <SocialIcon type="email" url={member.socials.email} />
                  )}
                  {member.socials.website && (
                    <SocialIcon type="website" url={member.socials.website} />
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Members;
