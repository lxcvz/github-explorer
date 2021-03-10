module.exports = {
    presets: [
        '@babel/preset-env',
        ['@babel/preset-react', {
            runtime: 'automatic'
        }] //passa a configuração que importa o react automaticamente em todos os arquivos. 
    ],
}