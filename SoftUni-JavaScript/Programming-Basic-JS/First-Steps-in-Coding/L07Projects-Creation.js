function projectCreation(name, countOfProjects) {
    let hours = Number(countOfProjects) * 3;
    console.log(`The architect ${name} will need ${hours} hours to complete ${countOfProjects} project/s.`);
}

projectCreation("George", 4);