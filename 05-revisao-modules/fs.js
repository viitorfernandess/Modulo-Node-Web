const { error } = require('console')
const fs = require('fs')
const path = require('path')

// // Criar pasta
// fs.mkdir(path.join(__dirname, "./test"), (error) => {
//     if (error) {
//         console.log("Erro: ", error)
//         return
//     }

//     console.log("Pasta criada com sucesso!")
// })

// Criar um arquivo

// fs.writeFile(path.join(__dirname, "./test", "test.txt"), "Hello, Node", (error) => {
//     if (error) {
//         console.log("Erro: ", error)
//         return
//     }
    
//     console.log("Arquivo criado com sucesso!")
// })

//  Adicionar à um arquivo
// fs.appendFile(path.join(__dirname, "./test", "test.txt"), "Hello, World", (error) => {
//     if (error) {
//         console.log("Erro: ". error)
//         return
//     }

//     console.log("Arquivo modificado com sucesso!")
// } )

// Ler um arquivo
fs.readFile(path.join(__dirname, "./test", "test.txt"), 'utf8', (error, data) => {
    if (error) {
        console.log("Erro: ", error)
        return
    }

    console.log(data)
})
