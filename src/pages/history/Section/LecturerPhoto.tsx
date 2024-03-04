export const LecturerPhoto = (props: {src: string}) => {
    return <div style={{
        backgroundImage: `url(${props.src})`,
        width: '275px',
        height: '388px',
        borderRadius: '12px',
        position: 'relative',
        top: -20,
        left: -20
    }}></div>
}