import React from "react"
import classNames from "classnames"

const Description = props => {
    return (
        <div className="description">
        <label htmlFor="description">Description</label>
        <textarea
          id="description"
          type="text"
          // className={classNames('description__input', {"description__input_error" : error})}
          placeholder="Enter description"
          name="description"
        //   value={value}
        //   onChange={onChangeDescription}
        />
        {/* <div className="error">
          {error ? (
            <div className="error__message">"Введите описание"</div>
          ) : null}
        </div> */}
      </div>
    )
}

export default Description