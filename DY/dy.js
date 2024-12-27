// 主网盘和备用网盘路径
const mainCloudV2TxtPath = "https://raw.githubusercontent.com/PJxiaoyu/Auto-js/refs/heads/main/DY/V2.txt";
const mainCloudMain2JsPath = "https://raw.githubusercontent.com/PJxiaoyu/Auto-js/refs/heads/main/DY/main2.js";
const backupCloudV2TxtPath = "http://xiaoyuyu.v6.army:5244/mnts/autojs/DY/V2.txt";
const backupCloudMain2JsPath = "http://xiaoyuyu.v6.army:5244/d/mnts/autojs/DY/main2.js";

// 本地文件路径
const localV2TxtPath = "./V2.txt";
const localVTxtPath = "./V.txt";
const localMainJsPath = "./main.js";

// 下载文件函数
function downloadFile(url, localPath) {
    try {
        let r = http.get(url); // 使用 Auto.js 的内置 http 模块
        if (r.statusCode === 200) {
            files.write(localPath, r.body.string()); // 将响应内容写入本地文件
            return true;
        } else {
            log("下载失败，状态码: " + r.statusCode);
            return false;
        }
    } catch (e) {
        log("下载失败: " + e);
        return false;
    }
}

// 比较文件内容
function compareFiles(file1Path, file2Path) {
    try {
        let content1 = files.read(file1Path);
        let content2 = files.read(file2Path);
        return content1 === content2;
    } catch (e) {
        log("文件比较失败: " + e);
        return false;
    }
}

// 主流程
function run() {
    // 下载 V2.txt
    let v2Downloaded = downloadFile(mainCloudV2TxtPath, localV2TxtPath) ||
                       downloadFile(backupCloudV2TxtPath, localV2TxtPath);

    if (!v2Downloaded) {
        log("V2.txt 下载失败，继续使用本地配置");
    }

    // 比较本地 V.txt 和下载的 V2.txt
    if (compareFiles(localV2TxtPath, localVTxtPath)) {
        log("V2.txt 与本地 V.txt 内容相同");
        files.remove(localV2TxtPath); // 删除下载的 V2.txt
    } else {
        log("V2.txt 内容不同，开始更新 main.js");

        // 下载 main2.js
        let main2Downloaded = downloadFile(mainCloudMain2JsPath, localMainJsPath) ||
                              downloadFile(backupCloudMain2JsPath, localMainJsPath);

        if (!main2Downloaded) {
            log("main2.js 下载失败，继续使用本地 main.js");
        }

        // 用下载的 V2.txt 替换本地 V.txt
        files.copy(localV2TxtPath, localVTxtPath);
    }

    // 执行 main.js
    engines.execScriptFile(localMainJsPath);
}

run();
