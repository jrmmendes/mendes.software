import React from 'react'

export default () => (
  <footer style={{
    color: 'white',
    width: '100%',
    alignItems: 'center',
    justifyContent: 'center',
    display: 'flex',
    height: '3rem',
    borderTop: '0.01em solid #939393',
    marginTop: '3rem',
    fontSize: '0.9em'
  }}>
    <p>
      Made with <strong>Code</strong> and <strong>Love</strong>.
        And also <a style={{ color: 'white', textDecoration: 'none' }} 
      target="_NEW" href="http://github.com/jrmmendes/nvim"><strong>VIM</strong></a>
    </p>
  </footer>
)
