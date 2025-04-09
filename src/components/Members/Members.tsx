import React from 'react';
import styles from './Members.module.css';
import { sampleMembers, Member } from '../../data/members';

const SocialIcon: React.FC<{ type: string; url: string }> = ({ type, url }) => {
  let iconChar = '?';
  let label = 'Link';
  switch (type) {
    case 'github':
      iconChar = '💻';
      label = 'GitHub';

      break;
    case 'email':
      iconChar = '✉️';
      label = 'Email';

      break;
    case 'website':
      iconChar = '🌐';
      label = 'Website';

      break;
    case 'signal':
      iconChar = '📱';
      label = 'Signal';

      break;
  }

  return (
    <a
      href={url}
      target="_blank"
      rel="noopener noreferrer"
      className={styles.socialLink}
      aria-label={`${label} profile`}
      title={label}
    >
      <span className={styles.iconPlaceholder}>{iconChar}</span>
    </a>
  );
};

const Members = () => {
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
                <p className={styles.cardRole}>
                  {member.role} ● {member.pronouns}
                </p>
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
