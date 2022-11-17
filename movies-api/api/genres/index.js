import  Genre from './genresModel';
import express from 'express';

const router = express.Router(); 


router.get('/', async (req, res) => {
    const genres = await Genre  .find();
    res.status(200).json(genres);
});
// router.get('/', (req, res) => {
//     res.json(genres);
    
// });

// router.get('/:id', (req, res) => {
//     const id = parseInt(req.params.id);
//     if (genres.id == id) {
//         res.status(200).json(genres);
//     } else {
//         res.status(404).json({
//             message: 'The resource you requested could not be found.',
//             status_code: 404
//         });
//     }
// });

export default router