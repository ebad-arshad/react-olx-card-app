import './UploadFile.css';

const UploadFile = ({ gettingFiles }) => {

    const fileGetting = (e) => {
        gettingFiles(e.target.files[0]);
        e.target.value = null;
    }

    return <>
        <label className="uploadBtn" htmlFor="imgFile">Upload Image</label>
        <input accept='image/*' onChange={e => fileGetting(e)} style={{ visibility: "hidden" }} type="file" id="imgFile" />
    </>
};
export default UploadFile;