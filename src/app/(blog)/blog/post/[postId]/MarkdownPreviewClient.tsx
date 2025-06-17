'use client';

import React from 'react';
import MarkdownPreview from '@uiw/react-markdown-preview';

interface MarkdownPreviewClientProps {
  source: string | null
}

export default function MarkdownPreviewClient({
  source
}: MarkdownPreviewClientProps) {
  return <MarkdownPreview source={source || ''} />
}