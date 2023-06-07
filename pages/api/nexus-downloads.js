const getNexusDownloads = async (req, res) => {
    const today = new Date()
    const dayOfTheMonth = String(today.getDate()).padStart(2, '0')
    const month = String(today.getMonth() + 1).padStart(2, '0')
    const year = today.getFullYear()

    const response = await fetch(`https://npm-stat.com/api/download-counts?package=recoil-nexus&from=${year - 1}-${month}-${dayOfTheMonth}&until=${year}-${month}-${dayOfTheMonth}`)

    const data = (await response.json())["recoil-nexus"]

    return res.status(200).send(Object.values(data).reduce((a, b) => a + b, 0))
}

export default getNexusDownloads