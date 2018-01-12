const chokidar = require('chokidar');
const _ = require('lodash');

let test = _.debounce(()=>{
   console.log('ログログ');
}, 5000);
 
// One-liner for current directory, ignores .dotfiles
const chokidarOpt = {
    ignored: 'node_modules',
    awaitWriteFinish: {
        stabilityThreshold: 2000,
        pollInterval: 100
    }
}

chokidar.watch('.', chokidarOpt).on('all', (event, path) => {
    switch(event) {
        case 'error':
            console.log(event, path);
            break;
        default:
            test();
    }
});