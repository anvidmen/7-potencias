global.atob = a => Buffer.from(a, 'base64').toString('binary')
