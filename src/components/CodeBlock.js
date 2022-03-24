import React, { useMemo, useContext } from 'react'
import rangeParser from 'parse-numeric-range'
import Highlight, { defaultProps } from 'prism-react-renderer'
import { DataContext } from 'states/context'
import themeDark from 'prism-react-renderer/themes/nightOwl'
import themeLight from 'prism-react-renderer/themes/github'

const CodeBlock = ({ children, className, metastring }) => {
  const { DarkMode } = useContext(DataContext)
  // Crear un cierre que determine si tenemos que resaltar el índice dado
  const calculateLinesToHighlight = meta => {
    const RE = /{([\d,-]+)}/
    if (RE.test(meta)) {
      const strlineNumbers = RE.exec(meta)[1]
      const lineNumbers = rangeParser(strlineNumbers)
      return index => lineNumbers.includes(index + 1)
    } else {
      return () => false
    }
  }

  const language = className?.replace(/language-/, '') || ''
  const shouldHighlightLine = useMemo(
    () => calculateLinesToHighlight(metastring),
    [metastring]
  )

  return (
    <Highlight
      {...defaultProps}
      code={children}
      language={language}
      theme={DarkMode ? themeDark : themeLight}
    // theme={undefined}
    >
      {({ className, style, tokens, getLineProps, getTokenProps }) => (
        <pre className={className} style={{ ...style }}>
          {tokens.map((line, index) => {
            const lineProps = getLineProps({ line, key: index })
            if (shouldHighlightLine(index)) {
              lineProps.className = `${lineProps.className} highlight-line`
            }
            return (
              <div key={index} {...lineProps}>
                {line.map((token, key) => (
                  <span key={key} {...getTokenProps({ token, key })} />
                ))}
              </div>
            )
          })}
        </pre>
      )}
    </Highlight>
  )
}

export default React.memo(CodeBlock)
