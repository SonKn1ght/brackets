module.exports = function check(str, bracketsConfig) {
        const config = bracketsConfig.map((cur) => {
            return cur.join('');
        })
        let i = 0;

        while (i < config.length) {
            while (str.includes(config[i])) {
                str = str.replace(config[i], '');
                i = -1;
            }
            i++;
        }

        return str === '';
}



