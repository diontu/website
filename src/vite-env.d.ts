/// <reference types="vite/client" />

interface ImportMetaEnv {
    readonly BE_DOMAIN: string
}

interface ImportMeta {
    readonly env: ImportMetaEnv
}
