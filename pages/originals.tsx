// importing components
import OriginalsCard from "../components/originalsCard"
import PageHeader from "../components/pageHeader"

const MISTOriginals = () => {
    const originals_dummy = [
        {
            "name": "Podcast 1",
            "hosts": ["Anirudh", "Aditya"],
            "link": " ",
            "image": "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse4.mm.bing.net%2Fth%3Fid%3DOIP.if6fpWadVcEZzTfgu3CxqAAAAA%26pid%3DApi&f=1",
            "speakers": []
        },
        {
            "name": "Podcast 2",
            "hosts": ["Anirudh", "Aditya"],
            "link": " ",
            "image": "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse2.mm.bing.net%2Fth%3Fid%3DOIP.PD3w5Y4YEOOhCu4auYBrGwHaHa%26pid%3DApi&f=1",
            "speakers": []
        }
    ]
    return (
        <div className="text-center container mx-auto text-gray-50 py-20 min-h-screen">
            <PageHeader title="MIST Originals" subtitle="Podcasts and short stories created at MIST." isCenter={true} />
            <div className="mx-auto lg:p-10 p-4 grid lg:grid-cols-4 md:grid-cols-3 grid-cols-1 gap-2">
            {
                originals_dummy.map((data:any) => {
                    return <OriginalsCard {...data}/>
                })
            }
            </div>
        </div>
    )
}

export default MISTOriginals