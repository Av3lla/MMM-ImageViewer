# URL Image Viewer Module

![JavaScript](https://img.shields.io/badge/JavaScript-181717.svg?logo=javascript)
![GitHub repo size](https://img.shields.io/github/repo-size/av3lla/url-imageviewer-module)
[![GitHub](https://img.shields.io/github/license/av3lla/url-imageviewer-module)](https://mit-license.org/)

### Magic Mirror Module

A module for the [MagicMirror](https://github.com/MichMich/MagicMirror) to display a [*URL image*].

---

* ## Preview
![preview](.github/preview.png)

---

* ## Usage
    You need to install and configure the module for your MagicMirror.

    ### Setup
    Clone the module into your modules folder.
    ```shell
    cd ~/MagicMirror/modules && git clone https://github.com/Av3lla/url-imageviewer-module
    ```
    ### [* Folder name issue](#known-issues)

    ### Configuration

    Add the module configuration to your `config.js` file.

    ```js
    {
    	module: 'ImageViewer',
    	position: 'top_left',
    	config: {
            headerText: 'text',
            url: 'ImageURL',
            width: 800,
            height: 450
    	}
    },
    ```

    | Option | Description | Default | Required |
    |---|---|---|---|
    | `headerText` | set header | `Image` | X |
    | `url` | Image URL | `null` | O |
    | `width` | Image Width | `800` | O |
    | `height` | Image Height | `450` | O |

---

### NOTE

#### Known Issues
  * You Need to change the *folder name* from `url-imageviewer-module` to `ImageViewer`.