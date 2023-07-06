type Theme = 'light' | 'dark'

function getDeviceTheme(): Theme {
    if (window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches) {
        return 'dark'
    }
    else {
        return 'light'
    }
}

function setTheme(theme: Theme): void {
    localStorage.setItem('ugario-user-theme', theme)
}

function getSelectedTheme(): Theme {
    const savedTheme: string | null = localStorage.getItem('ugario-user-theme')
    if (savedTheme === null) {
        const deviceTheme: Theme = getDeviceTheme()
        setTheme(deviceTheme)
        return deviceTheme
    }
    return String(savedTheme) as Theme
}

export default {
    getDeviceTheme,
    setTheme,
    getSelectedTheme
}