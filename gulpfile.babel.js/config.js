export const pjson = require('../package.json');

export const config = {
  browserSyncConfig: {
    ghostMode: {
      clicks: true,
      scroll: true,
      links: true,
      forms: true
    },
    server: {
      baseDir: ['/dist/']
    },
    proxy: pjson.buildconfigs.proxy,
    https: false,
    open: false,
    debugInfo: false,
    watchTask: false,
    notify: {
      styles: [
        'padding: 8px 16px;',
        'position: fixed;',
        'font-size: 12px;',
        'font-weight: bold',
        'z-index: 9999;',
        'top: inherit',
        'border-radius: 0',
        'right: 0;',
        'top: 0;',
        'color: #f4f8f9;',
        'background-color: #026277;',
        'text-transform: uppercase'
      ]
    }
  },
  paths: {
    src: './src/',
    dest: './dist/',
    copy: {
      src: ['src/structure/**/**', 'src/structure/**/.*', '!src/structure/**/*.{php,html,xml,ini,less,json,js,css}', '!src/structure/**/.*.{php,html,xml,ini,less,json,js,css}'],
      replacesrc: ['src/structure/**/**.{php,html,xml,ini,less,json,js,css}', 'src/structure/**/.*.{php,html,xml,ini,less,json,js,css}'],
      dest: 'dist/',
      watch: ['src/structure/**/*.{php,html,xml,ini,less,json,js,css}'],
    },
    copyrelease: {
      src: ['src/structure/**/**', 'src/structure/**/.*', '!src/structure/**/*.{php,html,xml,ini,less,json,js,css}', '!src/structure/**/.*.{php,html,xml,ini,less,json,js,css}'],
      replacesrc: ['src/structure/**/**.{php,html,xml,ini,less,json,js,css}', 'src/structure/**/.*.{php,html,xml,ini,less,json,js,css}'],
      dest: 'releasefiles/'
    },
    cleaner: {
      releasefiles: 'releasefiles/',
      sourcefiles: 'sourcefiles/',
      archives: 'archives/',
      packages: 'package/'
    },
  },
  packagefiles: [
    {
      src: './releasefiles/plugins/installer/kicktemp/**/**',
      dest: 'sourcefiles/plg_installer_kicktemp'
    },
    {
      src: './releasefiles/plugins/system/kickytp/**/**',
      dest: 'sourcefiles/plg_system_kickytp'
    },
    {
      src: './releasefiles/pkg_kickytp.xml',
      dest: 'package/'
    },
    {
      src: './releasefiles/pkg_script.php',
      dest: 'package/'
    }
  ],
  package: [
    {
      destination : 'archives/',
      name: 'pkg_kickytp',
      types: [
        {
          extension: '.zip',
          type: 'zip'
        }
      ],
      folders: [
        'package'
      ],
      files: [
      ]
    }
  ],
  archiver: [
    {
      destination : 'package/packages/',
      name: 'plg_system_kickytp',
      suffixversion: false,
      types: [
        {
          extension: '.zip',
          type: 'zip',
          options: {
            zlib: { 'level': 9 }
          }
        }
      ],
      folders: [
        'sourcefiles/plg_system_kickytp'
      ],
      files: [
      ]
    },
    {
      destination : 'package/packages/',
      name: 'plg_installer_kicktemp',
      suffixversion: false,
      types: [
        {
          extension: '.zip',
          type: 'zip',
          options: {
            zlib: { 'level': 9 }
          }
        }
      ],
      folders: [
        'sourcefiles/plg_installer_kicktemp'
      ],
      files: [
      ]
    },
    {
      destination : 'archives/',
      name: 'pkg_kickytp',
      suffixversion: true,
      types: [
        {
          extension: '.zip',
          type: 'zip'
        }
      ],
      folders: [
        'package'
      ],
      files: [
      ]
    }
  ]
};

export const isProd = process.env.NODE_ENV === 'production';

export const stringsreplace = extend({}, {"[VERSION]": pjson.version} , pjson.placeholder);

function extend(target) {
  var sources = [].slice.call(arguments, 1);
  sources.forEach(function (source) {
    for (var prop in source) {
      target[prop] = source[prop];
    }
  });
  return target;
}
