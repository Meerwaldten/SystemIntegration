import express from 'express';


const app = express();
app.use(express.urlencoded({ extended: true}));

import multer from 'multer';
//const upload = multer({ dest: './uploads'});

const storage = multer.diskStorage({
    destination: (req, file, cb) => {
        cb(null, './uploads')
    },
    filename: (req, file, cb) => {
        // Fix this shit
        const uniquePrefix = Date.now() + '-' + Math.round(Math.random() * 1E9)
        const uniqueFilename = `${uniquePrefix}_${file.originalname}`; // Backticks = String template literal
        //cb(null, file.fieldname + '-' + uniqueSuffix)
        cb(null, uniqueFilename)
    }
});

function fileFilter(req, file, cb) {
    const allowedTypes = ['image/jpeg', 'image/png', 'image/svg'];

    if (!allowedTypes.includes[file.mimeType]) {
        cb(new Error('File type not allowed: ' + file.mimeType), false);
    } else {
        cb(null, true);
    }

    const maxSize = 10 * 1024 * 1024; // 10 MB
}
 
const upload = multer({ 
    storage,
    limts: {
        fileSize: 10 * 1024 * 1024 // 10 MB
    },
    fileFilter  
});

app.post('/form', (req, res) => {
    console.log(req.body);
    delete req.body.password;
    res.send(req.body);
});

app.post('/fileform', upload.single('file'), (req, res) => {
    console.log(req.body);
    res.send({ });
});

const PORT = process.env.PORT ?? 8080;
app.listen(PORT, () => console.log('Server is running on port: ', PORT));