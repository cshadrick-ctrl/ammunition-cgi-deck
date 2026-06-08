import { promises as fs } from 'fs'
import path from 'path'

export async function GET() {
    try {
          const filePath = path.join(process.cwd(), 'public', 'deck.html')
          const fileContent = await fs.readFile(filePath, 'utf-8')

      return new Response(fileContent, {
              headers: {
                        'Content-Type': 'text/html; charset=utf-8',
              },
      })
    } catch (error) {
          console.error('Error reading deck.html:', error)
          return new Response('File not found', { status: 404 })
    }
}
