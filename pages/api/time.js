export default function handler(req, res) {
    const currentTime = new Date().toISOString();
    res.status(200).json({ time: currentTime });
  }