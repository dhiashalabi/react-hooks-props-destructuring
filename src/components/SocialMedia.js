function SocialMedia(props) {
    const { github, linkedin } = props;

    return (
        <div>
            <a href={github}>{github}</a>
            <a href={linkedin}>{linkedin}</a>
        </div>
    );
}

export default SocialMedia;
