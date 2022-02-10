export default async (req, res) => {
    const url = "https://api.github.com/users/warun1801/repos";
    const response = await fetch(url, {
        headers: {
            "Authorization": "token " + process.env.NEXT_PUBLIC_API_KEY
        }
    });
    const data = await response.json();
    return res.status(200).json(data);
}