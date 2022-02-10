export default function parseData(projects) {
    const newArr = [];
    projects.forEach((project) => {
        if (project.fork === true || project.visibility === "private") return;
        newArr.push({
            id: project.id,
            title: project.name,
            description: project.description || "",
            link: project.html_url,
            stars: project.stargazers_count,
            forks: project.forks_count,
            language: project.language || "",
        });
    });
    // Sort the newArr by stars in descending order
    newArr.sort((a, b) => b.stars - a.stars);
    console.log(newArr);
    return newArr;
}