export default function RoomPage() {
    const cardNumbers = [
        { id: 1, value: '1' },
        { id: 2, value: '3' },
        { id: 3, value: '5' }
    ];

    return (
        <>
            <div className={''}>Choose Card</div>

            <div className={'flex'}>
                {cardNumbers.map((number) => (
                    <div id={ number.id }>{ number.value }</div>
                ))}
            </div>
        </>
    )
}
