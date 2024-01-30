const Maintenance = (): JSX.Element => {
    return (
        <div className="flex flex-col justify-cente my-24">
            <p className="text-2xl">
                I'm just building this right now... come back again and I'll
                have it ready for you!
            </p>
            <div className="flex justify-center">
                <img
                    src="/maintenance-panel.gif"
                    alt="maintenance gif"
                    className="md:w-7/12 md:h-[400px] object-cover"
                />
            </div>
        </div>
    )
}

export default Maintenance
