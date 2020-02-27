import React from "react"
import classNames from "classnames"

const Title = props => {

    return (
        <div className="title">
        <label htmlFor="title">Title</label>
        <input
          id="title"
          type="text"
          // className={classNames('title__input', {"title__input_error" : error})}
          placeholder="Enter title"
          name="title"
        //   value={value}
        //   onChange={onChangeTitle}
        />
        {/* <div className="error">
          {error ? (
            <div className="error__message">"Введите название"</div>
          ) : null}
        </div> */}
      </div>
    )
}

export default Title