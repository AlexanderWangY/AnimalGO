import * as tf from '@tensorflow/tfjs'
import { bundleResourceIO, decodeJpeg } from '@tensorflow/tfjs-react-native'

// const modelJson = require('./model.json')
// const modelWeights = require('./group1-shard1of1.bin')

// export const loadModel = async () => {
//     try {
//         const model = await tf.loadLayersModel(bundleResourceIO(modelJson, modelWeights))
//         console.log("Model loaded successfully")
//         return model
//     } catch (error) {
//         console.error("Error loading model:", error)
//         return null
//     }
// };

// export const tranformImageToTensor = async (image) => {

// }