import { createWriteStream, unlink } from 'fs';
import { get } from 'https';
import { join } from 'path';
import { categories } from './parsedItems'

async function downloadImage(url: string, filepath: string) {
    return new Promise<void>((resolve, reject) => {
        get(url, (response) => {
            if (response.statusCode !== 200) {
                reject(new Error(`Failed to get '${url}' (${response.statusCode})`));
                return;
            }

            const fileStream = createWriteStream(filepath);
            response.pipe(fileStream);

            fileStream.on('finish', () => {
                fileStream.close();
                resolve();
            });

            fileStream.on('error', (err) => {
                unlink(filepath, () => {}); // Delete the file if there's an error
                reject(err);
            });
        }).on('error', (err) => {
            reject(err);
        });
    });
}

async function downloadAllIcons() {
    const downloadDir = process.cwd();
    
    for (const item of categories.electronics) {
        const filename = `${item.id}.png`;
        const filepath = join(downloadDir, filename);
        
        console.log(`Downloading ${item.name} to ${filename}...`);
        
        try {
            await downloadImage(item.iconUrl, filepath);
            console.log(`Successfully downloaded ${filename}`);
        } catch (error) {
            console.error(`Error downloading ${item.name}: ${error}`);
        }
    }
}

// Execute the download
downloadAllIcons()
    .then(() => console.log('All downloads completed'))
    .catch((err) => console.error('Download process failed:', err));
    