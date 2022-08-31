const AutoGitUpdate = require('auto-git-update');

const config = {
    repository: 'https://github.com/namanshandilyapsiborg/Saps_AutoUpdate.git',
    fromReleases: true,
    tempLocation: 'D:/PsiBorg/',
    token : "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",
    //ignoreFiles: ['util/config.js'],
    //executeOnComplete: 'C:/Users/scheg/Desktop/worksapce/AutoGitUpdate/startTest.bat',
    exitOnComplete: true
}

const updater = new AutoGitUpdate(config);

//updater.autoUpdate();
updater.forceUpdate();