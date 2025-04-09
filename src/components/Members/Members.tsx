import React from "react";
import styles from "./Members.module.css";
import { sampleMembers, type Member } from "../../data/members";

// Icons!
import PlaceholderLogo from "/src/assets/icons/none.svg";
import GithubLogo from "/src/assets/icons/gh.svg";

const SocialIconImage: React.FC<{ type: string; url: string }> = ({
  type,
  url,
}) => {
  let iconUrl = PlaceholderLogo;
  let label = "Link";
  switch (type) {
    case "github":
      iconUrl = GithubLogo;
      label = "GitHub";

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
      <img className={styles.iconPlaceholder} src={iconUrl} />
    </a>
  );
};

const SocialIcon: React.FC<{ type: string; url: string }> = ({ type, url }) => {
  let iconChar = "?";
  let label = "Link";
  switch (type) {
    case "email":
      iconChar = "✉️";
      label = "Email";

      break;
    case "website":
      iconChar = "🌐";
      label = "Website";

      break;
    case "signal":
      iconChar = "💬";
      label = "Signal";

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

const Member = (props: {
  member: Member;
}) => {
  const { id, imageUrl, name, role, pronouns, bio, socials } = props.member;

  const handleNameClick = (e: React.MouseEvent) => {
    e.preventDefault();
    if (id !== 3) return;
    const mapFn = (_: unknown, i: number) => new BustPartical(
      lycaX + Math.random() * 100 - 50,
      lycaY + Math.random() * 100 - 50,
      Math.random() * 5 + 2,
      // Math.random() * 2 * Math.PI
      // i % 2 === 0 ? 1.9 * Math.PI : 1.1 * Math.PI,
      1.9 * Math.PI,
      i,
      3 + (Math.random() * 2),
    );

    class BustPartical {
      public timeWaited = 0;
      public startTime = performance.now();
      constructor(public x: number, public y: number, public radius: number, public direction: number, public delay: number, public speed: number, public isChild: boolean = false) { }

      draw(ctx: CanvasRenderingContext2D) {
        if (this.timeWaited < this.delay) {
          this.timeWaited++;
          return;
        }

        ctx.fillStyle = '#fff';
        ctx.beginPath();
        ctx.arc(this.x, this.y, this.radius, 0, Math.PI * 2);
        ctx.fill();
        this.x += Math.random() * this.speed - 1;
        this.y += Math.random() * this.speed - 1;
        this.x += Math.cos(this.direction) * this.speed;
        this.y += Math.sin(this.direction) * this.speed;

        if (this.startTime + 1000 < performance.now() && !this.isChild)
          particles.push(
            new BustPartical(
              this.x,
              this.y,
              this.radius * 0.5,
              this.direction + Math.PI,
              Math.random() * 100 + 100,
              Math.random() * 2 + 1,
              true
            )
          );
      }
    }
    const lycaX = window.innerWidth / 2;
    const lycaY = window.innerHeight / 2 + 100;
    const lycaBustInterval = 1000;

    let particles: BustPartical[] = Array.from({ length: 75 }, mapFn);
    let lastLycaBust = 0;
    let lycaBustAmount = 0;

    const render = async () => {
      particles = particles.filter((bustParticle) => {
        return bustParticle.x > -100 && bustParticle.x < window.innerWidth + 100 && bustParticle.y > -100 && bustParticle.y < window.innerHeight + 100;
      });
      const canvas = document.getElementById('orgasm') as HTMLCanvasElement;
      const ctx = canvas.getContext('2d');
      if (!ctx) return;

      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;

      for (const bustParticle of particles) {
        bustParticle.draw(ctx);
      }

      if (performance.now() - lastLycaBust >= lycaBustInterval) {
        particles.push(...Array.from({ length: 150 + (lycaBustAmount * 2) }, mapFn));
        lastLycaBust = performance.now();
        lycaBustAmount++;
      }

      requestAnimationFrame(render);
    }

    document.open();
    document.write(`
      <style>
      body {
        background-color: #000;
        color: #fff;
        display: flex;
        justify-content: center;
        align-items: center;
        height: 100vh;
        margin: 0;
      }
      @keyframes bust {
        0% { transform: scale(1); }
        50% { transform: scale(1.2); }
        100% { transform: scale(1); }
      }
      </style>
      <canvas id="orgasm" style="z-index: 9999; position: absolute; top: 0; left: 0; width: 100%; height: 100%;"></canvas>
      <img id="bustImage" src="https://lycanea.dev/avatar.png" style="text-align: center;font-size: 200px;animation: bust 1s infinite;"/>
    `);
    document.close();

    const bustImage = document.getElementById('bustImage') as HTMLImageElement;
    let animationDuration = 1;

    const increaseAnimationSpeed = () => {
      animationDuration = Math.max(0.2, animationDuration - 0.4);
      bustImage.style.animationDuration = `${animationDuration}s`;
    };

    bustImage.addEventListener('animationiteration', increaseAnimationSpeed);
    // let lyca throb before bust
    setTimeout(render, 2000);
  };

  return (<div key={id} className={styles.card}>
    <img
      src={imageUrl}
      alt={`${name} profile picture`}
      className={styles.cardImage}
      loading="lazy"
    />
    <div className={styles.cardContent}>
      <h3 className={styles.cardName} onClick={handleNameClick}>{name}</h3>
      <p className={styles.cardRole}>
        {role} ● {pronouns}
      </p>
      <p className={styles.cardBio}>{bio}</p>
      <div className={styles.socials}>
        {socials.github && (
          <SocialIconImage type="github" url={socials.github} />
        )}
        {socials.email && (
          <SocialIcon type="email" url={socials.email} />
        )}
        {socials.website && (
          <SocialIcon type="website" url={socials.website} />
        )}
        {socials.signal && (
          <SocialIcon type="signal" url={socials.signal} />
        )}
      </div>
    </div>
  </div>);
}

const Members = () => {
  return (
    <section id="members" className={styles.members}>
      <div className={styles.container}>
        <h2>Our Members</h2>
        <p className={styles.intro}>
          Awesome goobers making this cool shit happen :3
        </p>
        <div className={styles.grid}>
          {sampleMembers.map((m: Member) => <Member member={m} />)}
        </div>
      </div>
    </section>
  );
};

export default Members;
