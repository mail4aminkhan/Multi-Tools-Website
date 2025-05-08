document.addEventListener('DOMContentLoaded', function() {
    const inputText = document.getElementById('input-text');
    const wordCount = document.getElementById('word-count');
    const charCount = document.getElementById('char-count');
    const sentenceCount = document.getElementById('sentence-count');
    const paragraphCount = document.getElementById('paragraph-count');
    const clearBtn = document.getElementById('clear-btn');
    const copyBtn = document.getElementById('copy-btn');
    
    inputText.addEventListener('input', updateCounts);
    clearBtn.addEventListener('click', clearText);
    copyBtn.addEventListener('click', copyText);
    
    function updateCounts() {
        const text = inputText.value;
        
        // Word count (simplified)
        const words = text.trim() === '' ? 0 : text.trim().split(/\s+/).length;
        wordCount.textContent = words;
        
        // Character count
        charCount.textContent = text.length;
        
        // Sentence count (simplified)
        const sentences = text.trim() === '' ? 0 : text.split(/[.!?]+/).filter(Boolean).length;
        sentenceCount.textContent = sentences;
        
        // Paragraph count
        const paragraphs = text.trim() === '' ? 0 : text.split(/\n+/).filter(p => p.trim().length > 0).length;
        paragraphCount.textContent = paragraphs;
    }
    
    function clearText() {
        inputText.value = '';
        updateCounts();
    }
    
    function copyText() {
        inputText.select();
        document.execCommand('copy');
        
        // Show feedback
        const originalText = copyBtn.textContent;
        copyBtn.textContent = 'Copied!';
        setTimeout(() => {
            copyBtn.textContent = originalText;
        }, 2000);
    }
});