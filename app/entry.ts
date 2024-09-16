"use client"

export const inputHandleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (
        (e.ctrlKey || e.metaKey) &&
        (e.key === 'Enter' || e.key === 'NumberEnter')
    ) {
        e.preventDefault();
        e.currentTarget.form?.requestSubmit();
    }
}
