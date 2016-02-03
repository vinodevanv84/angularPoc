var path = require('path'),
    rootDir = path.join(process.cwd()),
    rootPath = path.join.bind(path, rootDir)

module.exports = {
    rootPath: rootPath,
    root: {
        path: rootPath.bind(rootPath)
    },
    builder: {
        path: rootPath.bind(rootPath, 'build')
    },
    bowerComponentsDir: {
    	path: rootPath.bind(rootPath, 'bower_components')
    },
    srcDir: {
    	path: rootPath.bind(rootPath, 'src')
    },
    stagingDir: {
    	path: rootPath.bind(rootPath, 'stage', 'web')
    } 
};
