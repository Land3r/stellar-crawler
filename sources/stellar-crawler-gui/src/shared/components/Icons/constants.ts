/* eslint-disable max-len */
const PATHS = {
  mail: 'M0 91.979l33.333-33.333 16.667 16.667 16.667-16.667 33.333 33.333h-100zM0 75.313v-50l25 25zM0 8.646l50 50.25 50-50.25h-100zM75 50.313l25-25v50z',
  phone:
    'M1.375 17.542q0.042 1.792 1.333 7.5t3.875 11.667 8.667 14.792 14.583 17.333q8.583 8.583 17.292 14.667t15 8.625 11.417 3.917 7.708 1.375l2.583-0.083 13.583-13.5q1.417-1.5 1.125-3.417t-1.875-3.083l-16-11.333q-1.583-1.167-3.75-1t-3.5 1.583l-9.833 9.833q-11.833-8.417-22.333-18.917t-18.917-22.333l9.833-9.833q1.417-1.417 1.667-3.458t-0.917-3.708l-11.583-16.167q-1.167-1.583-3.042-1.833t-3.375 1.167l-13.5 13.5q-0.083 0.917-0.042 2.708z',
  at: 'M72.2,94c-8.4,3.8-15.7,5-25.6,5C23.4,99,3,82.3,3,54.9C3,26.4,23.7,1.6,55.3,1.6c24.6,0,42.3,16.9,42.3,40.4  c0,20.4-11.5,33.3-26.6,33.3c-6.6,0-11.3-3.4-12-10.8h-0.3C54.3,71.7,48,75.4,40.6,75.4c-9.1,0-15.7-6.7-15.7-18.2  c0-17.1,12.6-32.6,32.7-32.6c6.2,0,13.2,1.5,16.7,3.5l-4.2,25.9c-1.4,8.3-0.4,12,3.5,12.2c6,0.1,13.6-7.6,13.6-23.6  c0-18.2-11.8-32.3-33.4-32.3c-21.4,0-40.2,16.8-40.2,43.5c0,23.4,15,36.7,35.8,36.7c7.1,0,14.7-1.5,20.3-4.5L72.2,94z M59.8,36.2  c-1.1-0.3-2.5-0.6-4.3-0.6c-9.2,0-16.5,9.1-16.5,19.9c0,5.3,2.4,8.7,7,8.7c5.2,0,10.6-6.6,11.9-14.7L59.8,36.2z',
  mutuelle:
    'M92.6,72.8c-5.4-4.5-11.3-8-17.6-10.5c-1.1-8.4-3.5-15.8-6.9-21.6l17.4-17.4c1.4-1.4,1.4-3.7,0-5.2s-3.7-1.4-5.2,0  L63.7,34.7c-1.2-1.3-2.4-2.4-3.8-3.4c2.9-2.7,4.7-6.4,4.7-10.7c0-8.1-6.6-14.6-14.6-14.6s-14.6,6.6-14.6,14.6c0,4.2,1.8,8,4.7,10.7  c-7.6,5.3-13.2,16.7-15,30.7c-6.3,2.6-12.3,6.1-17.7,10.7C5.8,74.2,5.7,76.5,7,78c1.3,1.5,3.6,1.7,5.2,0.4c3.8-3.3,7.9-5.9,12.3-8  c0,0.5,0,1.1,0,1.6c0,6.7,0.9,13.2,2.5,19.3c0.4,1.6,1.9,2.7,3.5,2.7h12.2c2,0,3.7-1.6,3.7-3.7l0-13.1c2-2,5.3-2,7.3-0.1v13.2  c0,2,1.6,3.7,3.7,3.7h12.2c1.6,0,3.1-1.1,3.5-2.7c1.7-6.1,2.5-12.5,2.5-19.3c0-0.5,0-1,0-1.5c4.3,2.1,8.5,4.7,12.3,7.9  c0.7,0.6,1.5,0.9,2.4,0.9c1,0,2.1-0.4,2.8-1.3C94.3,76.4,94.1,74.1,92.6,72.8z M40.5,58c-2.6,0.4-5.1,0.8-7.6,1.5  c2.6-13.9,9.4-24.1,17.1-24.1c3.1,0,6,1.6,8.6,4.5L40.5,58z M51.5,57.4l11.3-11.3c1.9,3.8,3.4,8.4,4.4,13.5  C62,58.2,56.7,57.5,51.5,57.4z',
  contract:
    'M9.635 98.74h88.802v-96.875h-88.802v96.875zM17.708 90.667v-72.656h72.656v72.656h-72.656zM25.781 82.594v-8.073h8.073v8.073h-8.073zM25.781 66.449v-8.073h8.073v8.073h-8.073zM25.781 50.303v-8.073h8.073v8.073h-8.073zM25.781 34.157v-8.073h8.073v8.073h-8.073zM41.927 82.594h40.365v-8.073h-40.365v8.073zM41.927 66.449v-8.073h40.365v8.073h-40.365zM41.927 50.303v-8.073h40.365v8.073h-40.365zM41.927 34.157v-8.073h40.365v8.073h-40.365z',
  date: 'M88.109 100.061h-75.542c-3.793 0-6.867-3.321-6.867-7.113v-75.543c0-3.793 3.075-6.868 6.867-6.868h6.868v3.434c0 5.689 4.612 10.3 10.301 10.3s10.301-4.611 10.301-10.3v-3.434h20.602v3.434c0 5.689 4.612 10.3 10.301 10.3s10.301-4.611 10.301-10.3v-3.434h6.868c3.793 0 6.867 3.075 6.867 6.868v75.542c0 3.792-3.075 7.114-6.867 7.114zM88.109 34.819h-75.542v58.128h75.542v-58.128zM29.736 51.988h-10.302v-10.548h10.301l0.001 10.548zM29.736 69.156h-10.302v-10.547h10.301l0.001 10.547zM29.736 86.324h-10.302v-10.546h10.301l0.001 10.546zM46.904 51.988h-10.301v-10.548h10.301v10.548zM46.904 69.156h-10.301v-10.547h10.301v10.547zM46.904 86.079h-10.301v-10.3h10.301v10.3zM64.073 51.988h-10.301v-10.548h10.301v10.548zM64.073 69.156h-10.301v-10.547h10.301v10.547zM64.073 86.324h-10.301v-10.546h10.301v10.546zM81.241 51.988h-10.301v-10.548h10.301v10.548zM81.241 69.156h-10.301v-10.547h10.301v10.547zM81.241 86.324h-10.301v-10.546h10.301v10.546zM70.833 20.838c-3.733 0-6.76-3.026-6.76-6.76v-7.081c0-3.733 3.027-6.761 6.76-6.761 3.733 0 6.76 3.028 6.76 6.761v7.081c0 3.734-3.027 6.76-6.76 6.76zM29.628 20.838c-3.734 0-6.76-3.026-6.76-6.76v-7.081c0-3.733 3.026-6.761 6.76-6.761 3.733 0 6.76 3.028 6.76 6.761v7.081c0 3.734-3.026 6.76-6.76 6.76z',
  euro: 'M2.083 58.646l8.333-8.333h9.417q0-3.917 0.417-8.333h-18.167l8.333-8.333h11.25q3.083-13.917 9.333-21.417 9.75-11.75 24.75-11.75 20.167 0 29.5 15.75 5 8.583 5.5 17.417h-15.083q0-4.583-2.125-8.25t-5.292-5.667-6.25-3.042-5.583-1.042q-2 0-4.375 0.833t-5.208 2.667-5.458 5.583-4.208 8.917h31.583l-8.333 8.333h-25q-0.5 3.833-0.5 8.333h33.833l-8.333 8.333h-25q0.75 6.167 2.75 11t4.375 7.583 5.167 4.542 4.917 2.417 3.875 0.625q2.417 0 5.5-1.083t6.25-3.083 5.292-5.625 2.125-8.042h14.5q-2.583 14.333-10.667 23.167-8.917 9.75-22.833 9.75-17.083 0-27-13.167-3-3.833-5.75-10.958t-3.75-17.125h-18.083z',
  product:
    'M1.563 42.181l0.081-38.346q0-0.807 0.605-1.413t1.413-0.605h38.266l56.51 56.51-40.365 40.365zM13.51 21.756q0 3.391 2.341 5.732 2.422 2.422 5.772 2.422t5.772-2.422q2.341-2.341 2.341-5.732t-2.341-5.732q-2.422-2.422-5.772-2.422t-5.772 2.422q-2.341 2.341-2.341 5.732z',
  wallet:
    'M98.2,27.7L98.2,27.7l0-11c0-2.9-2.4-5.3-5.3-5.3H18.6c-2.9,0-5.2,2.4-5.2,5.2h0v0v0.1v4.9H7.1c-2.9,0-5.2,2.3-5.3,5.2v56.4  c0,2.9,2.4,5.3,5.3,5.3h74.3c2.9,0,5.2-2.4,5.2-5.3l0-5h4.9H93c2.9,0,5.2-2.3,5.3-5.2V61.7h0V27.7z M94.4,64.7L94.4,64.7  c-0.8,1-1.8,1.9-2.8,2.6v10h-4.9l0-8.2c-0.4,0-0.9,0.1-1.3,0.1H71.2c-7.7,0-14-6.3-14-14c0-7.7,6.3-14,14-14h14.2  c0.4,0,0.9,0,1.3-0.1V26.9c0-2.9-2.4-5.2-5.2-5.2h-67v-4.9h67c5.6,0,10.2,4.5,10.2,10.1v10.3l5.6-7.3v8l-2.8,3.7  c-1.1,1.4-2.5,2.6-4.2,3.3c-1.5,0.7-3.2,1.1-4.9,1.1H71.2c-5,0-9.1,4.1-9.1,9.1c0,5,4.1,9.1,9.1,9.1h14.2c2,0,3.9-1,5.2-2.6l6.7-8.7  v8L94.4,64.7z M79.1,55.2c0,1.4-1.1,2.5-2.5,2.5h-5.9c-1.4,0-2.5-1.1-2.5-2.5s1.1-2.5,2.5-2.5h5.9C78,52.7,79.1,53.8,79.1,55.2z',
  user: 'M3.125 100.313v-11.917l33.333-21.417v-8.333q-3.083 0-5.708-6.208t-2.625-10.458v-16.667q0-10.333 7.333-17.667t17.667-7.333 17.667 7.333 7.333 17.667v16.667q0 4.25-2.625 10.458t-5.708 6.208v8.333l33.333 21.417v11.917h-100z',
  home: 'M3.154 51.778l51.303-50.365 50.365 50.365h-15.641v46.924h-23.462v-31.283h-23.462v31.283h-23.462v-46.924h-15.641z',
  'download-csv':
    'M70.4 5H13.9v90h72.2V20.7L70.4 5zM83 91.2H50v-7.8h24.7V67.8H49.9v-5.2L63 39.8h-6.8V16.9H43.5v22.9h-6.8l13.1 22.7v5.2H25v15.6h24.8v7.8H16.7V8.4h53.8v12.3H83v70.5zM49.7 76.3l-1-.4c-.8-.3-1.6-1-1.6-2.2 0-1.3 1.2-2.4 2.9-2.4.9 0 1.9.3 2.6 1l-1 1.3c-.5-.4-1-.6-1.6-.6-.5 0-.8.2-.8.5 0 .4.4.5 1.2.8l.9.4c1 .4 1.5 1.1 1.5 2.1 0 1.3-1.1 2.5-3 2.5-1 0-2.1-.4-3-1.1l1.2-1.4c.6.4 1.2.8 1.8.8.6 0 .9-.2.9-.6 0-.3-.4-.4-1-.7zm3.4-4.8h2.2l.8 3.4c.2.8.4 1.6.6 2.5.2-.8.4-1.6.6-2.5l.8-3.4h2.1l-2.3 7.8h-2.5l-2.3-7.8zm-9 6.1c.6 0 1.1-.3 1.4-.7l1.1 1.3c-.7.8-1.6 1.2-2.6 1.2-2 0-3.7-1.3-3.7-4 0-2.6 1.8-4.1 3.8-4.1 1 0 1.9.5 2.4 1l-1.1 1.3c-.4-.3-.8-.6-1.3-.6-.9 0-1.7.8-1.7 2.3 0 1.5.7 2.3 1.7 2.3z',
  slash:
    'M233.869 0h109.119L109.119 280H0L233.869 0zM299.988 144.545V239h-78.797l-34.203 41h156V93l-43 51.545zM43 41h78.797L156 0H0v187l43-51.545V41z',
  storybook:
    'M9.6.6C9.6.2 9.3 0 9 0h-.7v1.4s0 .1-.1.1h-.1l-.3-.4-.5.4h-.1v-.1L7.3 0 .6.5c-.3 0-.6.3-.5.6L.4 11c0 .3.3.6.6.6l8 .4c.3 0 .6-.3.6-.6V.6zM5.1 9.7c-1.4 0-2.7-.6-2.5-2.6.1-.2 1.9-.2 1.9 0 0 .8.2 1.1.6 1.1.4 0 .5-.2.5-.5 0-1.2-3-1.3-3-3.5C2.6 2.9 3.5 2 5 2c1.6 0 2.4.8 2.4 2.4-.2.2-1.8.3-1.8 0 0-.9-.4-.9-.6-.9-.2 0-.6.1-.6.5 0 1.2 3 1.1 3 3.5.1 1.4-.9 2.2-2.3 2.2z',
  github:
    'M409.132 114.573c-19.608-33.596-46.205-60.194-79.798-79.8-33.598-19.607-70.277-29.408-110.063-29.408-39.781 0-76.472 9.804-110.063 29.408-33.596 19.605-60.192 46.204-79.8 79.8C9.803 148.168 0 184.854 0 224.63c0 47.78 13.94 90.745 41.827 128.906 27.884 38.164 63.906 64.572 108.063 79.227 5.14.954 8.945.283 11.419-1.996 2.475-2.282 3.711-5.14 3.711-8.562 0-.571-.049-5.708-.144-15.417a2549.81 2549.81 0 0 1-.144-25.406l-6.567 1.136c-4.187.767-9.469 1.092-15.846 1-6.374-.089-12.991-.757-19.842-1.999-6.854-1.231-13.229-4.086-19.13-8.559-5.898-4.473-10.085-10.328-12.56-17.556l-2.855-6.57c-1.903-4.374-4.899-9.233-8.992-14.559-4.093-5.331-8.232-8.945-12.419-10.848l-1.999-1.431c-1.332-.951-2.568-2.098-3.711-3.429-1.142-1.331-1.997-2.663-2.568-3.997-.572-1.335-.098-2.43 1.427-3.289 1.525-.859 4.281-1.276 8.28-1.276l5.708.853c3.807.763 8.516 3.042 14.133 6.851 5.614 3.806 10.229 8.754 13.846 14.842 4.38 7.806 9.657 13.754 15.846 17.847 6.184 4.093 12.419 6.136 18.699 6.136 6.28 0 11.704-.476 16.274-1.423 4.565-.952 8.848-2.383 12.847-4.285 1.713-12.758 6.377-22.559 13.988-29.41-10.848-1.14-20.601-2.857-29.264-5.14-8.658-2.286-17.605-5.996-26.835-11.14-9.235-5.137-16.896-11.516-22.985-19.126-6.09-7.614-11.088-17.61-14.987-29.979-3.901-12.374-5.852-26.648-5.852-42.826 0-23.035 7.52-42.637 22.557-58.817-7.044-17.318-6.379-36.732 1.997-58.24 5.52-1.715 13.706-.428 24.554 3.853 10.85 4.283 18.794 7.952 23.84 10.994 5.046 3.041 9.089 5.618 12.135 7.708 17.705-4.947 35.976-7.421 54.818-7.421s37.117 2.474 54.823 7.421l10.849-6.849c7.419-4.57 16.18-8.758 26.262-12.565 10.088-3.805 17.802-4.853 23.134-3.138 8.562 21.509 9.325 40.922 2.279 58.24 15.036 16.18 22.559 35.787 22.559 58.817 0 16.178-1.958 30.497-5.853 42.966-3.9 12.471-8.941 22.457-15.125 29.979-6.191 7.521-13.901 13.85-23.131 18.986-9.232 5.14-18.182 8.85-26.84 11.136-8.662 2.286-18.415 4.004-29.263 5.146 9.894 8.562 14.842 22.077 14.842 40.539v60.237c0 3.422 1.19 6.279 3.572 8.562 2.379 2.279 6.136 2.95 11.276 1.995 44.163-14.653 80.185-41.062 108.068-79.226 27.88-38.161 41.825-81.126 41.825-128.906-.01-39.771-9.818-76.454-29.414-110.049z',
} as const;

export default PATHS;