const typeClassMap = {
    default: 'btn',
    clicked: 'btn clicked',
};

const typeButtonText = {
    default: 'Favourite',
    clicked: 'Unfavourite',
};

// eslint-disable-next-line import/no-unused-modules
export default function Button({
    favourite,
    onClick,
}: {
    favourite: boolean;
    onClick: React.MouseEventHandler<HTMLButtonElement>;
}) {
    if (favourite) {
        return (
            <button className={typeClassMap.clicked} onClick={onClick}>
                {typeButtonText.clicked}
            </button>
        );
    } else
        return (
            <button className={typeClassMap.default} onClick={onClick}>
                {typeButtonText.default}
            </button>
        );
}
