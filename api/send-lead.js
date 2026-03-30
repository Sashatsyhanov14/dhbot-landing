// Vercel Serverless Function to send lead data to Telegram
// Uses environment variables: TELEGRAM_BOT_TOKEN, TELEGRAM_CHAT_ID

export default async function handler(req, res) {
    if (req.method !== 'POST') {
        return res.status(405).json({ message: 'Method Not Allowed' });
    }

    const { telegram, phone } = req.body;

    if (!telegram && !phone) {
        return res.status(400).json({ message: 'At least one contact method is required' });
    }

    const token = process.env.TELEGRAM_BOT_TOKEN;
    const chatId = process.env.TELEGRAM_CHAT_ID;

    if (!token || !chatId) {
        return res.status(500).json({ message: 'Telegram configuration missing on server' });
    }

    let text = `🚀 *Новая заявка с сайта DHBOT*%0A%0A`;
    if (telegram) text += `👤 *Telegram:* \`${telegram}\` %0A`;
    if (phone) text += `📞 *Телефон:* \`${phone}\` %0A`;

    const url = `https://api.telegram.org/bot${token}/sendMessage?chat_id=${chatId}&text=${text}&parse_mode=Markdown`;

    try {
        const response = await fetch(url);
        const result = await response.json();

        if (result.ok) {
            return res.status(200).json({ message: 'Success' });
        } else {
            return res.status(500).json({ message: 'Telegram API Error', details: result });
        }
    } catch (error) {
        return res.status(500).json({ message: 'Server Error', error: error.message });
    }
}
